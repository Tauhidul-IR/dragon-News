import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaTwitch, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCaurosel from '../BrandCaurosel/BrandCaurosel';

const RightSideNav = () => {
    const googleProvider = new GoogleAuthProvider();
    const { providerLogin } = useContext(AuthContext);
    const handleProvider = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(result)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleProvider} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find Us With</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCaurosel></BrandCaurosel>
        </div>
    );
};

export default RightSideNav;