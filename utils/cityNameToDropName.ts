import { CITY_NAMES_KR } from "../data/city_names_kr";
import type { DropDownItem } from "../lib/types";

export default async function cityNameToDropName() {
	const cityNames = CITY_NAMES_KR;
	const dropdownCityNames: DropDownItem[] = [];

	for (const cityName of cityNames) {
		dropdownCityNames.push({
			value: cityName.code,
			item: cityName.name,
		});
	}

	await Bun.write(
		"output/dropdownCityNames.json",
		JSON.stringify(dropdownCityNames),
	);
}
