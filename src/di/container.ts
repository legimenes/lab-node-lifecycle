import { Container } from "inversify";
import { TYPES } from "./types";
import ITransientService from "../services/ITransientService";
import TransientService from "../services/TransientService";
import IScopedService from "../services/IScopedService";
import ScopedService from "../services/ScopedService";
import ISingletonService from "../services/ISingletonService";
import SingletonService from "../services/SingletonService";

const container = new Container();

container.bind<ITransientService>(TYPES.ITransientService).to(TransientService).inTransientScope();
container.bind<IScopedService>(TYPES.IScopedService).to(ScopedService).inRequestScope();
container.bind<ISingletonService>(TYPES.ISingletonService).to(SingletonService).inSingletonScope();

export { container };
