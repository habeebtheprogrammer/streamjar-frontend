import React,{Component} from "react"

export default class Download extends Component{
    render(){
        return(
            <div className="download-app" style={{"background": `url(${process.env.PUBLIC_URL}/images/main-search-background-01.jpg)`}}>
	<div className="container">
		<div className="row">
			<div className="col-lg-8 col-lg-offset-2">
				<img src="images/logo2.png" alt="" />

				<h3>Download App Here</h3>
				
				
				<div id="countdown" className="margin-top-10 margin-bottom-35 margin-left-35">
					
					<article className="g_row0 m_dl_tips t0 f_hidden m_bg_gray scroll">
            	<div className="g_main">
            		<div className="t_v_mid_box">
            			<div className="t_v_mid t0"><i className="i_logo_88"></i></div>
            		 	<div className="t_v_mid desc">
                            <p className="t24">Available on</p>
                            <p className="t16 t_gray md_em_small">Enjoy HK$10 off your first Mobile App booking using promo code ‘mobile10’</p>
            			</div>
            			<div className="t_v_mid t0 download_box">
                            <a href="https://itunes.apple.com/app/klook/id961850126?mt=8" className="i_ios_dl_en"></a><br />
                            <a href="https://play.google.com/store/apps/details?id=com.klook&amp;hl=en" className="i_and_dl_en"></a>
                            <img width="80px" className="pull-left" src="http://www.userlogos.org/files/logos/jumpordie/google_play_04.png" />
                            <div className="btn-text"><small>Available on</small><br /><strong>Google Play</strong></div>
            			</div>
            			
<div className="t_v_mid t0 download_box">
                            <a href="https://itunes.apple.com/app/klook/id961850126?mt=8" className="i_ios_dl_en"></a><br />
                            <a href="https://play.google.com/store/apps/details?id=com.klook&amp;hl=en" className="i_and_dl_en"></a>
                            <img width="55px" className="pull-left" src="http://1.bp.blogspot.com/-rD2_M6Vvv6w/UbmywLq5V8I/AAAAAAAACko/BEcR4QqtkRI/s1600/Windows%2BStore%2BLogo.png" /><div className="btn-text"><small>Available on</small><br /><strong>Windows Store</strong></div>
            			</div>
<div className="t_v_mid t0 download_box">
                            <a href="https://itunes.apple.com/app/klook/id961850126?mt=8" className="i_ios_dl_en"></a><br />
                            <a href="https://play.google.com/store/apps/details?id=com.klook&amp;hl=en" className="i_and_dl_en"></a>


                            <img width="60px" className="pull-left" src="images/app-store.png" /><div className="btn-text"><small>Available on</small><br /><strong>App Store</strong></div>
            			</div>
                 
               


            			<div className="t_v_mid t0">
            				<i className="i_qr108"></i>
            			</div>
            			<div className="t_v_mid t0">
            				<a><i className="j_dl_close t12 klook-icon-close t_gray"></i></a>
            			</div>
            		</div>
                    </div>
            </article>
				</div>
				<br />

				
			</div>
		</div>
	</div>
</div>
        )
    }
}