import allCountries from "./countries";
import { countryFlags } from "./country.flags";
const comboBoxInput = document.getElementById('combo-input-box');
const comboBoxUpIcon = document.getElementById('combo-up-icon');
const comboBoxDownIcon = document.getElementById('combo-down-icon');
const comboBoxCountryListing = document.getElementById('combo-country-listing');
const comboBoxLabel = document.getElementById('combo-input-label-span');
const comboBoxCountryListingList = document.getElementById('combo-country-listing-list');
const init = () => {
    generateListing(allCountries);
};
const generateListing = (countries) => {
    let listing = ``;
    let countriesWithFlags = [];
    countries.forEach((country, index) => {
        var _a;
        const flag = countryFlags.filter((flag) => {
            return flag.code == country.code;
        });
        const flagEmoji = (_a = flag[0]) === null || _a === void 0 ? void 0 : _a.emoji;
        countriesWithFlags.push(Object.assign(Object.assign({}, country), { flag: flagEmoji }));
    });
    countriesWithFlags.forEach((country) => {
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
    comboBoxCountryListingList === null || comboBoxCountryListingList === void 0 ? void 0 : comboBoxCountryListingList.innerHTML = listing;
};
const filterCountryListing = (key) => {
    const filteredCountries = allCountries.filter((country) => {
        return country.label.includes(key) || country.code.includes(key) || country.phone.includes(key);
    });
    return filteredCountries;
};
const clearListing = () => {
    comboBoxCountryListingList === null || comboBoxCountryListingList === void 0 ? void 0 : comboBoxCountryListingList.innerHTML = '';
};
;
;
;
const showComboBoxList = () => {
    comboBoxCountryListing === null || comboBoxCountryListing === void 0 ? void 0 : comboBoxCountryListing.style.display = 'block';
};
const hideComboBoxList = () => {
    comboBoxCountryListing === null || comboBoxCountryListing === void 0 ? void 0 : comboBoxCountryListing.style.display = 'none';
};
const showUpIcon = () => {
    comboBoxUpIcon === null || comboBoxUpIcon === void 0 ? void 0 : comboBoxUpIcon.style.display = 'block';
};
const showDownIcon = () => {
    comboBoxDownIcon === null || comboBoxDownIcon === void 0 ? void 0 : comboBoxDownIcon.style.display = 'block';
};
const hideUpIcon = () => {
    comboBoxUpIcon === null || comboBoxUpIcon === void 0 ? void 0 : comboBoxUpIcon.style.display = 'none';
};
const hideDownIcon = () => {
    comboBoxDownIcon === null || comboBoxDownIcon === void 0 ? void 0 : comboBoxDownIcon.style.display = 'none';
};
const minimizeAndTranslateLabel = () => {
    comboBoxLabel === null || comboBoxLabel === void 0 ? void 0 : comboBoxLabel.classList.remove('translate-y-2', 'translate-x-2');
    comboBoxLabel === null || comboBoxLabel === void 0 ? void 0 : comboBoxLabel.classList.add('scale-60', 'translate-x-6', '-translate-y-4');
};
const setDefaultLabelState = () => {
    comboBoxLabel === null || comboBoxLabel === void 0 ? void 0 : comboBoxLabel.classList.add('translate-y-2', 'translate-x-2');
    comboBoxLabel === null || comboBoxLabel === void 0 ? void 0 : comboBoxLabel.classList.remove('scale-60', 'translate-x-6', '-translate-y-4');
};
const computeDistanceFromEndOfPage = () => {
};
const updateInputWithSelectedListItem = (selection) => {
    comboBoxInput === null || comboBoxInput === void 0 ? void 0 : comboBoxInput.nodeValue = selection;
};
comboBoxDownIcon === null || comboBoxDownIcon === void 0 ? void 0 : comboBoxDownIcon.addEventListener('click', () => {
    showList();
});
comboBoxUpIcon === null || comboBoxUpIcon === void 0 ? void 0 : comboBoxUpIcon.addEventListener('click', () => {
    hideList();
});
const showList = () => {
    hideDownIcon();
    showUpIcon();
    showComboBoxList();
    minimizeAndTranslateLabel();
};
const hideList = () => {
    hideUpIcon();
    showDownIcon();
    hideComboBoxList();
    setDefaultLabelState();
};
const filterClearAndGenerateListing = (filterString) => {
    const filteredCountries = filterCountryListing(filterString);
    if (filteredCountries.length > 1) {
        clearListing();
        generateListing(filteredCountries);
    }
    ;
};
comboBoxCountryListingList === null || comboBoxCountryListingList === void 0 ? void 0 : comboBoxCountryListingList.addEventListener('click', (e) => {
    e.preventDefault();
    let selectionValue = '';
    for (let i = 0; i < e.target.children.length; i++) {
        selectionValue += e.target.children[i].innerText + ' ';
    }
    console.log(selectionValue);
    comboBoxInput === null || comboBoxInput === void 0 ? void 0 : comboBoxInput.value = selectionValue;
});
comboBoxInput === null || comboBoxInput === void 0 ? void 0 : comboBoxInput.addEventListener('click', (e) => {
    showList();
});
comboBoxInput === null || comboBoxInput === void 0 ? void 0 : comboBoxInput.addEventListener('focus', (e) => {
    showList();
});
comboBoxInput === null || comboBoxInput === void 0 ? void 0 : comboBoxInput.addEventListener('keyup', (e) => {
    if (e.isComposing || e.keyCode === 27) {
        hideList();
    }
    ;
});
comboBoxInput === null || comboBoxInput === void 0 ? void 0 : comboBoxInput.addEventListener('keyup', (e) => {
    var _a;
    if (e.code === "Backspace") {
        const filterString = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
        filterClearAndGenerateListing(filterString);
    }
    ;
});
comboBoxInput === null || comboBoxInput === void 0 ? void 0 : comboBoxInput.addEventListener('keypress', (e) => {
    var _a;
    if (e.keyCode !== 27) {
        const filterString = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
        filterClearAndGenerateListing(filterString);
    }
    ;
});
init();
