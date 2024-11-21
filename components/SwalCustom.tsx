import Swal from "sweetalert2";

const swalCustomAlert = (text: string, error?: boolean) => {
  if (error) {
    return Swal.fire({
      title: text,
      icon: "error",
      color: "#222",
      confirmButtonColor: "#5088db",
    });
  }
  return Swal.fire({
    title: text,
    color: "#222",
    confirmButtonColor: "#5088db",
  });
};

export default swalCustomAlert;
