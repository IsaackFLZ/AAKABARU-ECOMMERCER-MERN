import { useParams } from "react-router-dom"

function ProductScreen() {
    const params = useParams();
    const { slug } = params;
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1>{slug}</h1>
        </div>
    );
}

export default ProductScreen;