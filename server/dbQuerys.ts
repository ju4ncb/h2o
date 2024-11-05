import express from "express";
import dbConfig from "./dbConfig.js";
import mysql from "mysql2/promise";

// db connection
const pool = mysql.createPool(dbConfig.dev);

export const insertQuery = async (
  tableName: string,
  columns: string[],
  values: string[]
) => {
  let columnsQuery = columns[0];
  let valuesQuery = "?";
  for (let i = 1; i < columns.length; i++) {
    columnsQuery += ", " + columns[i];
    valuesQuery += ", ?";
  }
  try {
    const connection = await pool.getConnection();
    const query = `
      INSERT INTO ${tableName} (${columnsQuery})
      VALUES (${valuesQuery});`;

    // Provide actual values for your columns
    const [rows] = await connection.execute(query, values);
    console.log("New row inserted:", rows);
    connection.release(); // Release the connection
  } catch (error) {
    console.log(error);
  }
};

export const selectQuery = async (
  tableName: string,
  columns: string[],
  condition: string
) => {
  let queryResults = {} as mysql.QueryResult;
  try {
    const connection = await pool.getConnection();
    let query: string;
    if (condition.trim() === "") {
      query = `
          SELECT ${columns} FROM ${tableName}
        `;
    } else {
      if (columns[0] === "all") {
        query = `
          SELECT * FROM ${tableName}
          WHERE ${condition};
        `;
      } else {
        query = `
          SELECT ${columns} FROM ${tableName}
          WHERE ${condition};
        `;
      }
    }
    // Provide actual values for your columns
    const [rows] = await connection.execute(query);
    console.log("Rows retrieved:\n", rows);
    queryResults = rows;
    connection.release(); // Release the connection
  } catch (error) {
    console.log(error);
  }
  return queryResults;
};

export const deleteQuery = async (tableName: string, condition: string) => {
  try {
    const connection = await pool.getConnection();
    let query: string;
    if (condition.trim() === "") {
      query = `
          DELETE FROM ${tableName}
        `;
    } else {
      query = `
          DELETE FROM ${tableName}
          WHERE ${condition};
        `;
    }
    // Provide actual values for your columns
    const [rows] = await connection.execute(query);
    console.log("Rows deleted:\n", rows);
    connection.release(); // Release the connection
  } catch (error) {
    console.log(error);
  }
};
