import express from "express";
import { container } from "./di/container";
import { TYPES } from "./di/types";
import ITransientService from "./services/ITransientService";
import IScopedService from "./services/IScopedService";
import ISingletonService from "./services/ISingletonService";
import ScopedService from "./services/ScopedService";

const router = express.Router();

router.get('/invoke', (request, response) => {
	const transientService1 = container.get<ITransientService>(TYPES.ITransientService);
	const transientService2 = container.get<ITransientService>(TYPES.ITransientService);
	//const scopedService1 = container.get<IScopedService>(TYPES.IScopedService);
	//const scopedService2 = container.get<IScopedService>(TYPES.IScopedService);
	const singletonService1 = container.get<ISingletonService>(TYPES.ISingletonService);
	const singletonService2 = container.get<ISingletonService>(TYPES.ISingletonService);

	const childContainer = container.createChild();
  childContainer.bind<IScopedService>(TYPES.IScopedService).to(ScopedService).inSingletonScope();
	const scopedChildService1 = childContainer.get<IScopedService>(TYPES.IScopedService);
	const scopedChildService2 = childContainer.get<IScopedService>(TYPES.IScopedService);

	response.json({
		TransientService1: transientService1.id,
		TransientService2: transientService2.id,
		ScopedService1: scopedChildService1.id,
		ScopedService2: scopedChildService2.id,
		Singleton1: singletonService1.id,
		Singleton2: singletonService2.id
	});

})

export default router;
