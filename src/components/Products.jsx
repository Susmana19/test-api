

const Products = ({dataProducts}) => {

    const { title, price, category, description, image } = dataProducts;

  return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{category}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Products