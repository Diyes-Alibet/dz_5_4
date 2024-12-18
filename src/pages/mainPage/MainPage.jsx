import React,{useState} from 'react';
import styles from "../../styles/Input.module.css";
function MainPage() {
    const [text, setText] = useState('');
    const [list , setList] = useState([]);

    const addItem = () => {
        if(text.trim()){
            setList([...list, text]);
            setText('')
        }
    }
    const updateItem =(index)=>{
        if(text.trim()){
            const updatedList =list.map((item,i)=>
            i===index?text:item
            )
            setList(updatedList);
            setText('')
        }
    }
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Введите имя'
                className={styles.input}
            />
        <button onClick={addItem} disabled={!text.trim()}>
               Добавить
        </button>
            {list.length===0?(
                <p>Список пуст</p>
            ) : (
                <ul>
                    {list.map((item,index)=> (
                        <li key={index}>
                            {item}{" "}
                            <button onClick={()=>updateItem(index)} disabled={!text.trim()}>
                                  Поменять
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MainPage;