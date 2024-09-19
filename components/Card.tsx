export function Card({ product }: { product: any }) {
    return (
      <div className="h-full w-full bg-slate-300">
        <img
          className="h-full w-full object-contain"
          src={product}
          alt="something"
        />
      </div>
    );
  }
  