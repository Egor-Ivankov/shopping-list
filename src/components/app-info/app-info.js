import "./app-info.css";

const AppInfo = ({allEmployees, allIncreased}) => {
    return (
        <div className="app-info">
            <h1>Мой список покупок </h1>
            <h2>Запланированно покупок: {allEmployees}</h2>
            <h2>Особых покупок: {allIncreased} </h2>
        </div>
    )
}

export default AppInfo;