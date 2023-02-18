import Chart from "react-apexcharts";
import houses from "../jsons/house-18-02-2023.json"

const BarChart = () => {
    
    return(
        <Chart
            options={{
                colors:["#55a1d3", "#eeb60b", "#d2232a", "#3dad47"],
                xaxis: {
                    categories: [""],
                    labels: {
                        style: {
                            fontSize: "1px"
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        fontFamily: "Montserrat",
                        fontWeight: "bold"
                    }
                },
                legend: {
                    fontFamily: "Montserrat",
                    fontSize: "14pt"
                }
            }}
            series={[
                {
                    name: "Pankhurst",
                    data: [houses[3]["total"]], 
                },
                {
                    name: "Mee",
                    data: [houses[1]["total"]], 
                },
                {
                    name: "Orwell",
                    data: [houses[2]["total"]], 
                },
                {
                    name: "Hawking",
                    data: [houses[0]["total"]], 
                },
            ]}
            type="bar"
            height="100%"     
            width="100%"   
        />    
    );
}

export default BarChart;