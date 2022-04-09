
import countries from "./countries";
import { countryFlags } from "./country.flags";
// @ts-ignore
import * as themeTogglerEventListener from './theme.toggler';

const comboBoxInput = document.getElementById('combo-input-box');
const comboBoxUpIcon = document.getElementById('combo-up-icon');
const comboBoxDownIcon = document.getElementById('combo-down-icon');
const comboBoxCountryListing = document.getElementById('combo-country-listing');
const comboBoxLabel = document.getElementById('combo-input-label');
const comboBoxCountryListingList = document.getElementById('combo-country-listing-list');

const init = () => {
    generateListing(countries);
};

const generateListing = (countries: Country[]) => {
    let listing = ``;
    let countriesWithFlags: CountryWithFlag[] = [];

    countries.forEach((country: Country, index: number) => {
        const flag: CountryFlag[] = countryFlags.filter((flag: CountryFlag) => {
            return flag.code == country.code;
        });
        const flagEmoji: string = flag[0]?.emoji;
        countriesWithFlags.push({ ...country, flag: flagEmoji });
    });

    countriesWithFlags.forEach((country: CountryWithFlag) => {
        const listItem = `
        <li class="flex flex-row w-full justify-between border border-gray-300 p-2">
            <span class="grow-0">
                ${country.flag}
            </span>
            <span>
                ${country.code}
            </span>
            <span>
                ${country.phone}
            </span>
            <p>
                ${country.label}
            </p>
        </li>
        `;
        listing += listItem;
    });
    comboBoxCountryListingList?.append(listing);
};

interface Country {
    code: string;
    label: string;
    phone: string;
};

export interface CountryFlag {
    emoji: string;
    unicode: string;
    image: string;
    name: string;
    code: string;
};

export interface CountryWithFlag extends Country {
    flag: string;
};

const showComboBoxListing = () => {
    //@ts-ignore
    comboBoxCountryListing?.style.display = 'block';
};

const hideComboBoxList = () => {
    // @ts-ignore
    comboBoxCountryListing?.style.display = 'none';
};

const showUpIcon = () => {
    // @ts-ignore
    comboBoxUpIcon?.style.display = 'block'
};

const showDownIcon = () => {
    // @ts-ignore
    comboBoxDownIcon?.style.display = 'block';
};

const hideUpIcon = () => {
    // @ts-ignore
    comboBoxUpIcon?.style.display = 'none'
};

const hideDownIcon = () => {
    // @ts-ignore
    comboBoxDownIcon?.style.display = 'none';
};

const minimizeAndTranslateLabel = () => {
    // @ts-ignore
    comboBoxLabel?.style.scale = '0.75';
    // @ts-ignore
    comboBoxLabel?.style.transform = 'translate(14, -9)';
};

const setDefaultLabelState = () => {
    // @ts-ignore
    comboBoxLabel?.style.scale = '1';
    // @ts-ignore
    comboBoxLabel?.style.transform = 'translate(0, 0)';
};

const computeDistanceFromEndOfPage = () => {

};

const updateInputWithSelectedListItem = (selection: string) => {
    // @ts-ignore
    comboBoxInput?.nodeValue = selection;
};



init();