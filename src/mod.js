"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParentIdsFixer {
    postDBLoad(container) {
        // Get the logger from the server container.
        const logger = container.resolve("WinstonLogger");
        // Get database from server.
        const db = container.resolve("DatabaseServer");
        // Get tables from database
        const tables = db.getTables();
        // Get item database from tables
        let itemDB = tables.templates.items;
        const assaultCarbineParentId = "5447b5fc4bdc2d87278b4567";
        const assaultRifleParentId = "5447b5f14bdc2d61278b4567";
        const lightTargetPointersParentID = "55818b0e4bdc2dde698b456e";
        itemDB["628b5638ad252a16da6dd245"]._parent = assaultCarbineParentId; // SAG AK-545 5.45x39 carbine
        itemDB["628b9c37a733087d0d7fe84b"]._parent = assaultCarbineParentId; // SAG AK-545 Short 5.45x39 carbine
        itemDB["5d43021ca4b9362eab4b5e25"]._parent = assaultCarbineParentId; // Lone Star TX-15 DML 5.56x45 carbine
        itemDB["5c07c60e0db834002330051f"]._parent = assaultCarbineParentId; // ADAR 2-15 5.56x45 carbine
        itemDB["57c44b372459772d2b39b8ce"]._parent = assaultRifleParentId; // AS VAL 9x39 special assault rifle
        itemDB["59e6687d86f77411d949b251"]._parent = assaultCarbineParentId; // Molot VPO-209 .366 TKM carbine
        itemDB["5c079ed60db834001a66b372"]._parent = lightTargetPointersParentID; // TT DLP Tactical Precision LAM-module
        itemDB["5cc9c20cd7f00c001336c65d"]._parent = lightTargetPointersParentID; // NcSTAR Tactical blue laser LAM-module
        logger.info("[ParentIdsFixer] MusicManiac - Parent Ids Fixer Loaded");
    }
}
module.exports = { mod: new ParentIdsFixer() };
//# sourceMappingURL=mod.js.map