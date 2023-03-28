import { DataTypes } from "sequelize"
import dbConnection from "./db.js";
import User from "./User.js";

const Quotes = dbConnection.define('Quotes', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
})

export default Quotes;