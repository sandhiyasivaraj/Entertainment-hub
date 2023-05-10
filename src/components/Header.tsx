import { Component } from "react";

class HeaderComponet extends Component {
    render(){
        return (
            <span onClick={() => window.scroll(0, 0)} className="header">
                🎬 Entertainment Hub 🎥
             </span>
        )
    }
}
export default HeaderComponet;