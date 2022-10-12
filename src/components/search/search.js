import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApioptions } from '../../api';

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (imputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?nimPopilation=1000000&namePrefix=${imputValue}`,
            geoApioptions
        )
            .then(response => response.json())
            //.then(response => console.log(response))

            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }

                    })
                }
            })
            .catch(err => console.error(err));

    }

    const handleOnChange = (seachData) => {
        setSearch(seachData);
        onSearchChange(seachData);
    }



    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}


export default Search;
