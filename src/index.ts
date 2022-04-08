import countries from "./countries";

const comboBoxInput = document.getElementById('combo-input-box');
const comboBoxUpIcon = document.getElementById('combo-up-icon');
const comboBoxDownIcon = document.getElementById('combo-down-icon');
const comboBoxCountryListing = document.getElementById('combo-country-listing');
const comboBoxLabel = document.getElementById('combo-input-label');

(() => {


    generateListing(countries);
});

const generateListing = (countries: Country[]) => {
    countries.forEach((country: Country, index: number) => {

    });
};

interface Country {
    code: string;
    label: string;
    phone: string;
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