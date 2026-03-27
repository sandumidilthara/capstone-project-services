module.exports = {
  apps: [
    {
      name: "cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy",
      args: "capstone-491116:asia-southeast1:mysql-vm capstone-491116:asia-southeast1:postgres-vm --private-ip",
      log_file: "./logs/cloud-sql-proxy-log",
    },
    {
      name: "student-service",
      script: "java",
      args: "-jar student-service/target/Student-Service-1.0.0.jar",
      cwd: "/home/bestwayconsultancy2025/capstone-project-services",
      log_file: "./logs/student-service.log",
      instances: 2,
    },
    {
      name: "program-service",
      script: "java",
      args: "-jar program-service/target/Program-Service-1.0.0.jar",
      cwd: "/home/bestwayconsultancy2025/capstone-project-services",
      log_file: "./logs/program-service.log",
      instances: 2,
    },
    {
      name: "enrollment-service",
      script: "java",
      args: "-jar enrollment-service/target/Enrollment-Service-1.0.0.jar",
      cwd: "/home/bestwayconsultancy2025/capstone-project-services",
      log_file: "./logs/enrollment-service.log",
      instances: 2,
    },
  ]
}