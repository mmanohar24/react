import Modal from '../components/Modal';
import Button from '../components/Button';
import  {useState} from 'react';

function ModalPage()
{
    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>
    {
        setShowModal(true);
    }

    const handleClose = () =>
    {
        setShowModal(false);
    }

    const actionBar = 
    <div>
        <Button onClick = {handleClose} primary > I Accept </Button>
    </div>

    const modal = 
    <Modal onClose = {handleClose} actionBar = {actionBar}> 
        <p>
            Here's an important agreement that you need to read and agree to before proceeding.
        </p>
    </Modal>;

    return (
        <div className = "relative">
            <Button onClick = {handleClick} primary> Click Here to Open Modal </Button>
            
            {showModal && modal}

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ligula sem, eu accumsan ex ultricies rutrum. Sed eget enim ut urna malesuada euismod. Pellentesque mollis quam id nisl volutpat, eget bibendum neque ultricies. Phasellus porttitor pretium quam at venenatis. Quisque scelerisque semper sem, vel luctus sapien semper fermentum. Duis luctus ex et lacus ornare, ac dictum nisi ultrices. Nulla vestibulum nibh et eros dignissim sagittis. Aenean efficitur mi est, sed finibus lacus vestibulum a. Aliquam volutpat est at tortor interdum faucibus.
            </p>
        </div>
    )
}

export default ModalPage;