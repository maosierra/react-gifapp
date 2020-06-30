import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                        category={category}
                        key={category}
                        />
                    )
                }
            </ol>
        </>
    )
}

AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}
