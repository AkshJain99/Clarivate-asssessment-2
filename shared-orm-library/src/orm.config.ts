import { DataSource, DataSourceOptions } from "typeorm";
import { User } from './entities/User';
import {Settings} from './entities/Settings'

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'My-account',
  entities: [User, Settings],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
  
}
const dataSource = new DataSource(dataSourceOptions)
export default dataSource