import { injectable } from "inversify";
import { v4 as uuidv4 } from "uuid";
import IScopedService from "./IScopedService";

@injectable()
export default class ScopedService implements IScopedService {
	id: string;

	constructor() {
		this.id = uuidv4();
	}
}
