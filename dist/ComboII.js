function ComboBoxII(props, ref) {
    const [showListing, setShowListing] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');
    console.log(countries);
    const handleChange = (e) => {
        console.log(e);
        setSelectedValue(e.nativeEvent.target.value);
    };
    const showList = () => {
        setShowListing(true);
    };
    const hideList = () => {
        setShowListing(false);
    };
    const handleListItemClick = (e) => {
        console.log(e);
    };
    React.useEffect(() => { }, [selectedValue]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "grid place-items-center h-screen w-screen" },
            React.createElement("div", { className: "flex flex-col bg-gray-200 p-10 rounded-lg border border-black dark:border-white w-96" },
                React.createElement("div", { className: "flex flex-row bg-white border border-blue-600 rounded-sm z-0" },
                    React.createElement("button", { className: " w-full mx-auto" },
                        React.createElement("label", { id: "", className: 'grow min-w-full' },
                            React.createElement("span", { id: "", className: "absolute z-10 cursor-pointer pointer-events-none text-black mx-auto block translate-y-2 translate-x-2 " }, "Countries"),
                            React.createElement("input", { type: "text", id: "combo-input-box", onFocus: showList, onClick: showList, value: selectedValue, onChange: handleChange, className: "text-indigo-500 z-0 p-2 leading-4 focus:border-none focus:outline-none w-full" })),
                        React.createElement("button", { className: "border-none mx-auto text-indigo-700 font-bold", id: "combo-toggler-button" },
                            showListing && (React.createElement("svg", { id: "combo-up-icon", xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-indigo-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", onClick: hideList },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 11l7-7 7 7M5 19l7-7 7 7" }))),
                            !showListing && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-indigo-600", fill: "none", viewBox: "0 0 24 24", width: 6, height: 6, stroke: "currentColor", strokeWidth: "2", id: "combo-down-icon", onClick: showList },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 13l-7 7-7-7m14-8l-7 7-7-7" })))))),
                showListing && (React.createElement("div", { className: "h-96 overflow-auto", id: "combo-country-listing" },
                    React.createElement("ul", { className: "list-none cursor-pointer", id: "combo-country-listing-list" },
                        React.createElement(React.Fragment, null, props._countries.map((country, index) => {
                            React.createElement("li", { className: "flex flex-row w-full border border-gray-300 p-2 text-xs", key: index.toString(), onClick: handleListItemClick },
                                React.createElement("span", { className: "w-6" },
                                    "$",
                                    country.code),
                                React.createElement("span", { className: "w-8" },
                                    "$",
                                    country.phone),
                                React.createElement("p", { className: "w-max" },
                                    "$",
                                    country.label));
                        })))))))));
}
const rootII = document.getElementById('react-combo-box-tw');
ReactDOM.render(React.createElement(ComboBoxII, { _countries: countries }), rootII);
