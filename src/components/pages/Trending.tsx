import { Component } from "react";
import axios from "axios";
import ContentCard from "../ContentCard";
import CustomPagination from "../CustomPagination";

interface MyProps {}
interface MyState {
    trendingData: Array<any>,
    page: number
}

class TrendingComponet extends Component<MyProps,MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            trendingData: [],
            page: 1
        }
    }

    fetchData =async () => {
        console.log("inside fetchData", this.state.page)
        let results: Array<any>
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${this.state.page}`)
        console.log(data,'data inside fetchdata')
        results = data?.results;
        this.setState({
            trendingData: results
        })
    }

    componentDidMount = () => {
        this.fetchData()
    }

    updatePageNumber = (num: number) => {
        this.setState(() => {
            return { page: num };
          }, () => {
            this.fetchData()
          });
    }

    componentDidUpdate = (prevProps: any, prevState: any) => {
        console.log("inside componentDidupdate", prevProps, prevState)
    }
    componentShouldUpdate = () => {
        console.log("inside componentShouldUpdate")
    }

    render(){
        const { trendingData } = this.state
        console.log("trendingData", this.state?.trendingData);
        return (
            <div>
                <span className="pageTitle">Trending Today</span>
                <div className="trending">
                    {trendingData &&
                    trendingData.map((c) => (
                        <ContentCard
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))}
                </div>
                <CustomPagination setPage={(num: number)=>this.updatePageNumber(num)}/>
            </div>
        )
    }
}
export default TrendingComponet;