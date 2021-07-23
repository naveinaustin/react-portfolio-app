import React, {Component} from "react";

class Footer extends Component {
    render() {
    	var dateObj = new Date();
		var year = dateObj.getFullYear();	
		if(this.props.data) {
			var techUsed = this.props.data.techUsed;
			var copyrightInfo = this.props.data.copyrightInfo;
		}
		
        return (
            <div className="footer-section" id="footer">
            	<div>This website was developed using: {techUsed}</div>
                <div>
                    Background Image by <a href="https://pixabay.com/users/freephotocc-2275370/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1280538">Free Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1280538">Pixabay</a>
                </div>
                <div className="copyright">
                    © Copyright {year} {copyrightInfo}
                </div>
            </div>
        );
    }    
}

export default Footer;