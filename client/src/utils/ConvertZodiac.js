import { useState } from 'react';

function ConvertZodiac({ birthday }) {
    const [zodic, setZodic] = useState('');
    function findZodic(date) {
        const month = Number(date.slice(5, 7));
        const day = Number(date.slice(8, 10));
        const convertCode = (month * 1000) + day
        return (
            convertCode >= 1021 && convertCode <= 2019 ? 'Aquarius' :
                convertCode >= 2020 && convertCode <= 3020 ? 'Pisces' :
                    convertCode >= 3021 && convertCode <= 4019 ? 'Aries' :
                        convertCode >= 4020 && convertCode <= 5020 ? 'Taurus' :
                            convertCode >= 5021 && convertCode <= 6021 ? 'Gemini' :
                                convertCode >= 6022 && convertCode <= 7022 ? 'Cancer' :
                                    convertCode >= 7023 && convertCode <= 8022 ? 'Leo' :
                                        convertCode >= 8023 && convertCode <= 9022 ? 'Virgo' :
                                            convertCode >= 9023 && convertCode <= 10023 ? 'Libra' :
                                                convertCode >= 10024 && convertCode <= 11021 ? 'Scorpio' :
                                                    convertCode >= 11022 && convertCode <= 12020 ? 'Sagittarius' :
                                                        convertCode >= 12022 && convertCode <= 1020 ? 'Capricorn' :
                                                            void 0)
    }
    useState(() => {
        setZodic(findZodic(birthday.toString()));
    }, [birthday]);
    return <p>| {zodic}</p>;
}

export default ConvertZodiac;
