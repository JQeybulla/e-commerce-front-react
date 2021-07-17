import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';


import './homePageProducts.css';
import image from './static/media/1_org.jpg';


const HomeProducts = () => {
    const heartStyles = {
        display: 'block',
        position: 'absolute',
        // float: 'right',
        // right: '0px',

        // color: 'red',
        fontSize: '30px',
        backgroundColor: 'white',
        borderRadius: '50%',
        padding: '5px',
        margin: '5px',
    };
    const [value, setValue] = React.useState(2);

    return (
        <div className="products_content">
            <h1>En cox satilan paltarlar</h1>
            <div className="products">
                <div className="row">
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                    <div className="product" >
                        <FavoriteBorderIcon style={heartStyles} className="heart" />
                        <img src={image} alt="alt" />
                        <h4>Category: <span className="second_fonts">Kisi T-shirti</span></h4>
                        <h4>Olculeri: <span className="second_fonts">S, L, XL</span> </h4>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                        <h4 className="price">Qiymeti: <span className="ex_price">35 AZN </span>  25 AZN</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;
