"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeaponCategoriesFixer {
    postDBLoad(container) {
        // Get the logger from the server container.
        const logger = container.resolve("WinstonLogger");
        // Get database from server.
        const db = container.resolve("DatabaseServer");
        // Get tables from database
        const tables = db.getTables();
        // Get item database from tables
        let itemDB = tables.templates.items;
        itemDB["628b5638ad252a16da6dd245"]._parent = "5447b5fc4bdc2d87278b4567"; // SAG AK-545
        itemDB["628b9c37a733087d0d7fe84b"]._parent = "5447b5fc4bdc2d87278b4567"; // SAG AK-545 short
        itemDB["5d43021ca4b9362eab4b5e25"]._parent = "5447b5fc4bdc2d87278b4567"; // Lone Star TX-15 DML 5.56x45 carbine
        logger.info("[Weapon Categories Fixer] MusicManiac - Weapon Categories Fixer Loaded:");
    }
}
module.exports = { mod: new WeaponCategoriesFixer() };
//# sourceMappingURL=mod.js.map