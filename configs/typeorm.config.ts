import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "comuse",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
};
