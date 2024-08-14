import { injectable } from "inversify";
import { v4 as uuidv4 } from "uuid";
import ISingletonService from "./ISingletonService";

@injectable()
export default class SingletonService implements ISingletonService {
	id: string;

	constructor() {
		this.id = uuidv4();
	}
}
