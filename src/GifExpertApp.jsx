import { useState } from "react";
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['Hacking']);

   const onAddCategory = (newCategory) => { 
    if(categories.includes(newCategory)) return
    setCategories([...categories, newCategory]);
   }
   
  return (
    <>
        <h1>Gif Expert App</h1>
        
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ (value) =>onAddCategory(value)}  
        />
  
          {/* <button onClick={onAddCategory}>Añadir</button> */}
        
            {categories.map( category =>( 
                     <GifGrid 
                        key={category}  
                        category={category}
                      />
              )) 
            } 
            
    </>
  )
}

// 77 addcategory
