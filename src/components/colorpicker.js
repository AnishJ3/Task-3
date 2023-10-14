import React, { useState,useEffect } from 'react';


function ColorPicker({colo}) 
{
    const col = document.querySelector('.colors');

    const [S,setS] = useState([]);

    useEffect(() =>
    {
        setS(colo);

        console.log(S);
    },[])

    const handleColor = (e) =>
    {
        
        const doc = document.querySelector('.container');
        let c = e.target.classList;
        doc.style.backgroundColor = c[0];
        col.classList.toggle('hidden');
    }
    

    const hide = () =>
    {
        col.classList.toggle('hidden');
    }

    const handleButton =() =>
    {

        return(
            <>
                <div className='pick'>

                    <button className='res' onClick={hide}>Pick Me</button>
                </div>


            </>

        )
    }
    return (

        <>
            <div className='title'>
                <h2>Color Picker</h2>
            </div>
            <div className="container">
                <div className='colors hidden'>
                    {

                        colo.map((values)=>
                        {
                            console.log(typeof(values));

                            
                            return (
                                <>
                                <div className='color'>
                                    <button style={{backgroundColor: values}} onClick={handleColor} className={values}>
                                    </button>
                                </div>

                                
                                </>
                            )

                        })

                    }
                </div>

                {
                    handleButton()
                }

            </div>
        </>

    );

}

export default ColorPicker;

/*

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AnishJ3/Task-3.git
git push -u origin main


*/