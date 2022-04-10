
import countries from "./countries";
import { countryFlags } from "./country.flags";
// @ts-ignore
import * as themeTogglerEventListener from './theme.toggler';

const comboBoxInput = document.getElementById('combo-input-box');
const comboBoxUpIcon = document.getElementById('combo-up-icon');
const comboBoxDownIcon = document.getElementById('combo-down-icon');
const comboBoxCountryListing = document.getElementById('combo-country-listing');
const comboBoxLabel = document.getElementById('combo-input-label-span');
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
        <li class="flex flex-row w-full border border-gray-300 p-2">
            <span class="w-6">
                ${country.flag}
            </span>
            <span class="w-8">
                ${country.code}
            </span>
            <span class="w-8">
                ${country.phone}
            </span>
            <p class="w-max">
                ${country.label}
            </p>
        </li>
        `;
        listing += listItem;
    });
    // @ts-ignore
    comboBoxCountryListingList?.innerHTML = listing;
};

const filterCountryListing = (key: string): Country[] => {
    const filteredCountries: Country[] = countries.filter((country) => {
        return country.label.includes(key) || country.code.includes(key) || country.phone.includes(key)
    });
    return filteredCountries;
};

const clearListing = (): void => {
    // @ts-ignore
    comboBoxCountryListingList?.innerHTML = '';
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

const showComboBoxList = () => {
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
    comboBoxLabel?.classList.remove('translate-y-2', 'translate-x-2');
    comboBoxLabel?.classList.add('scale-60', 'translate-x-6', '-translate-y-4');
};

const setDefaultLabelState = () => {
    comboBoxLabel?.classList.add('translate-y-2', 'translate-x-2');
    comboBoxLabel?.classList.remove('scale-60', 'translate-x-6', '-translate-y-4');
};

const computeDistanceFromEndOfPage = () => {

};

const updateInputWithSelectedListItem = (selection: string) => {
    // @ts-ignore
    comboBoxInput?.nodeValue = selection;
};
comboBoxDownIcon?.addEventListener('click', () => {
    hideDownIcon();
    showUpIcon();
    showComboBoxList();
    minimizeAndTranslateLabel();
});
comboBoxUpIcon?.addEventListener('click', () => {
    hideUpIcon();
    showDownIcon();
    hideComboBoxList();
    setDefaultLabelState();
});

comboBoxCountryListingList?.addEventListener('click', (e: Event) => {
    e.preventDefault();
    let selectionValue = '';
    // @ts-ignore
    for (let i = 0; i < e.target.children.length; i++) {
        // @ts-ignore
        selectionValue += e.target.children[i].innerText + ' ';
    }
    console.log(selectionValue);
    // @ts-ignore
    comboBoxInput?.innerHTML = selectionValue;
});

comboBoxInput?.addEventListener('change', (e: Event) => {

    if (!null) {
        // @ts-ignore
        const filteredCountries: Country[] = filterCountryListing(e.target?.nativeElement.value);
        if (filteredCountries.length > 1) {
            clearListing();
            generateListing(filteredCountries);
        };

    };

});


init();