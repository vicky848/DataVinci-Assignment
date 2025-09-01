import { useState , useRef,useEffect  } from 'react'
import './index.css'

 // Fruits And Vegetables  initial data

  // Within each category there is a "Checked" (for the parent)

  
// and there is an "item" object (for children)

const fruitsvegitableCategory = {
    Fruits:{checked:false, items:{Apple:false, Banana:false, Orange:false, Grapes:false}},
    vegitables:{checked:false, items:{Tomato:false, Carrot:false, Broccoli:false }}
}

const Checkbox = () => {
 

// The entire category object is kept in state

    const [categories, setCategories] = useState(fruitsvegitableCategory)

     const categoryRefs = useRef({})

    //  To get a reference to each parent checkbox (to be indeterminate)

    useEffect(() => {
      Object.entries(categories).forEach(([category, data]) => {
        const childValues = Object.values(data.items)
        const allChecked = childValues.every(Boolean)
        const noneChecked = childValues.every(v => !v)
        
        
// If neither all are true nor all are false, the parent checkbox will be indeterminate
        if (categoryRefs.current[category]) {
          categoryRefs.current[category].indeterminate = !allChecked && !noneChecked
        }
      })
    }, [categories])



    // Function to toggle Parent (category) checkbox

    const toggleCategory = (category) => {
        const current =   categories[category]
        const newChecked = !current.checked 

      //  Update each child item according to the parent
        const updatedItem = {};

        Object.keys(current.items).forEach((item) => (updatedItem[item] = newChecked))

        setCategories({
            ...categories ,
            [category]: {checked:newChecked, items:updatedItem},
        })

    }
    
// Child (item) checkbox toggle function

    const toggleItem = (category, item) => {
        
        const current = categories[category];
        // Inverts the value of the item to be toggled
    const updatedItems = {
      ...current.items,
      [item]: !current.items[item],
    };

    
// If all children are true then parent will also be true
    const allSelected = Object.values(updatedItems).every(Boolean); 

    setCategories({
      ...categories,
      [category]: { checked: allSelected, items: updatedItems },
    });
    }

  return(
    <div className='checkbox-container'>
        <h1 className='fruits-vegi-heading'>Choose Fruits & Vegetables</h1>
          {Object.entries(categories).map(([category, data]) => (
        <div   key={category} className='checkbox-category'>
            <label>
                <input
                type='checkbox'
                checked={data.checked}
                 ref={el => categoryRefs.current[category] = el} 
                 onChange={() => toggleCategory(category)}
                />
                <strong className='category'>{category}</strong>
            </label>
            <div className='checkbox-item'>
                {Object.entries(data.items).map(([item, isChecked]) => (
                <label  key={item} className = "item-label">
                    <input
                    type='checkbox'
                    checked={isChecked}
                     onChange={() => toggleItem(category, item)}
                    
                    />
                    <strong className='item'>{item}</strong>
                </label>
                ))}
            </div>

        </div>
          ))}
    </div>
  )
}

export default Checkbox
