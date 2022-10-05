import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import zem from '../assets/items/zem.png'
import download from '../assets/items/download.png'



const Items  = ()=>{
    const[dataList, setDataList] = useState([]);

    useEffect( ()=>{
        axios
        .get('https://api.plkey.app/theme?category=LIVE')
        .then((res)=>{
        setDataList(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    console.log(dataList)
    return (
        <>
        <Wrapper>
            {
                dataList.map(list => {
                    return (
                        <ItemCategory key={list.id}>
                    <div>
                        <img className='image'src={list.imageUrl}/>
                    </div>
                    <div className='title'>{list.name}</div>
                    <div className='tag'>{list.hashtag}</div>
                    <div className='alignment'>
                        <div>
                            <img src={download}/>
                            <span className='download'>{list.downloads}</span>
                        </div>
                        <div>
                            <img src={zem} />
                            <span className='price'>10</span>
                        </div>
                    </div>
                </ItemCategory>
                    )
                })
            }
            </Wrapper>
        </>
    )

}
const Wrapper = styled.div`
display:flex;
flex-wrap: wrap;
` ;


const ItemCategory = styled.div`
width: 164px;
padding-left: 14px;

.image{
    width: 100%;
    height: 130px;
}
.title{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #42444C;
}
.tag{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #AAABB3;
    opacity: 1;
}
.alignment{
    display: flex;
    justify-content: space-between;

    .download{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #AAABB3;
    }
    .price{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #7DC9FC;
    }
}
`;
export default Items;