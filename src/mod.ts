import { DependencyContainer } from "tsyringe";
import { Ilogger } from "@spt-aki/models/spt/utils/Ilogger";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class WeaponCategoriesFixer implements IPostDBLoadMod
{
	public postDBLoad(container: DependencyContainer): void 
	{
		// Get the logger from the server container.
		const logger = container.resolve<Ilogger>("WinstonLogger");
		// Get database from server.
		const db = container.resolve<DatabaseServer>("DatabaseServer");
		// Get tables from database
		const tables = db.getTables();    
		// Get item database from tables
		let itemDB = tables.templates.items;

		const assaultCarbineParentId = "5447b5fc4bdc2d87278b4567";
		const assaultRifleParentId = "5447b5f14bdc2d61278b4567";

		itemDB["628b5638ad252a16da6dd245"]._parent = assaultCarbineParentId; // SAG AK-545 5.45x39 carbine
		itemDB["628b9c37a733087d0d7fe84b"]._parent = assaultCarbineParentId; // SAG AK-545 Short 5.45x39 carbine
		itemDB["5d43021ca4b9362eab4b5e25"]._parent = assaultCarbineParentId; // Lone Star TX-15 DML 5.56x45 carbine
		itemDB["57c44b372459772d2b39b8ce"]._parent = assaultRifleParentId; // AS VAL 9x39 special assault rifle
		itemDB["59e6687d86f77411d949b251"]._parent = assaultCarbineParentId; // Molot VPO-209 .366 TKM carbine

		logger.info("[Weapon Categories Fixer] MusicManiac - Weapon Categories Fixer Loaded:");
	}
}

module.exports = { mod: new WeaponCategoriesFixer() }