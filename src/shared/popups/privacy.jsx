import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const Privacy = (props) => {
    const { isOpen, toggle } = props
    return (
        <Modal isOpen={isOpen} toggle={toggle} size={'lg'}>
            <ModalHeader toggle={toggle}>Privacy Statment</ModalHeader>
            <ModalBody>
                <p>
                    PEPP respects your privacy and is committed to protecting your personal data. This privacy statement outlines how we collect, use, and safeguard your personal information in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                </p>
                <p>Information We Collect: We collect and process personal data that you voluntarily provide to us, such as your name, contact details, and any other information you choose to share with us.</p>
                <p>How We Use Your Information: We use your personal data to provide you with our services, communicate with you, and fulfill our contractual obligations. We may also use your information for legitimate business purposes, such as improving our services and marketing activities.</p>
                <p>Data Security: We take appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.</p>
                <p>Your Rights: You have the right to access, rectify, or erase your personal data, as well as the right to restrict or object to processing and the right to data portability. If you wish to exercise any of these rights, please contact us using the details provided below.</p>
                <p>Contact Us: If you have any questions or concerns about our privacy practices or wish to exercise your rights regarding your personal data, please contact us at:</p>
                <ul>
                    <li>Info@pearlepp.co.uk</li>
                    <li>+44 7460 140474</li>
                </ul>
                <p className='mt-3'>PEPP</p>
            </ModalBody>
        </Modal>
    )
}

export default Privacy
