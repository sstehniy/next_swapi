import { MongoClient, Logger } from "mongodb";

export const createMongoClient = async () => {
	Logger.setLevel("debug");
	const dbClient: MongoClient = await new Promise((resolve, reject) => {
		MongoClient.connect(
			"mongodb+srv://sstehniy:Buyua12345@main.sjuus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true, useUnifiedTopology: true },
			(error, client) => {
				if (error) {
					reject(error);
				}
				resolve(client);
			}
		);
	});
	return dbClient;
};
