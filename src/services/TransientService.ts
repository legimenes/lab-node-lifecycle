import { injectable } from "inversify";
import { v4 as uuidv4 } from "uuid";
import ITransientService from "./ITransientService";

@injectable()
export default class TransientService implements ITransientService {
	id: string;

	constructor() {
		this.id = uuidv4();
	}
}
