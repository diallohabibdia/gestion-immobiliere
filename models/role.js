import database from "../config/database.js";
import { DataTypes } from "sequelize";

const Role = database.define('Role', {
    titre: { type: DataTypes.STRING, allowNull: false }
})

export default Role