import Button from '../components/Button';
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function ButtonPage()
{
    return (
        <div>
            <div>
                <Button rounded outline className = "mb-5">
                    Click Me!!
                </Button>
            </div>

            <div>
                <Button primary >
                    Primary
                    <GoBell className = "ml-1"/>
                </Button>
            </div>

            <div>
                <Button secondary >
                    Secondary
                    <GoCloudDownload />
                </Button>
            </div>
            
            <div>
                <Button success>
                    Success
                    <GoDatabase />
                </Button>
            </div>

            <div>
                <Button warning>
                    Warning
                </Button>
            </div>

            <div>
                <Button danger outline>
                    Danger
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage;