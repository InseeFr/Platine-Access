import { useEffect } from 'react'

export function MatomoOptOut () {
    useEffect(() => {
        if(import.meta.env.VITE_TRACKING_URL)
        {
        const script = document.createElement('script')
        const firstScript = document.getElementsByTagName('script')[0]
        script.src = "https://insee.matomo.cloud/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&showIntro=1"
        script.async = true
        firstScript.parentElement?.insertBefore(script, firstScript)
        return () => {
            script.remove()
        }
    }
    }, [])
    
    return  <div id="matomo-opt-out"/>
}