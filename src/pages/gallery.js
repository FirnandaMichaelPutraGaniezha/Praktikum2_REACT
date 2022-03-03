import React from "react"
import {Modal, Button} from 'react-bootstrap'
import Card from "../component/card"

export default class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            buku : [
                {
                    isbn: "12345",
                    judul: "Konspirasi Alam Semesta",
                    penulis: "Fiersa Besari",
                    penerbit: "Media Kita",
                    harga: 199000,
                    cover: "https://drive.google.com/uc?id=1aNK0B-MI9w9UD5kgdSK105QiEhYGLxOq"
                },
                {
                    isbn: "23456",
                    judul: "Garis Waktu",
                    penulis: "Fiersa Besari",
                    penerbit: "Media Kita",
                    harga: 175000,
                    cover: "https://drive.google.com/uc?id=1KVEf1H-mmhe3ABTgIzRopG4KyFkZpd7e"
                },
                {
                    isbn: "34567",
                    judul: "Sebelas Sebelas",
                    penulis: "Fiersa Besari",
                    penerbit: "Media Kita",
                    harga: 199000,
                    cover: "https://drive.google.com/uc?id=1IM5CtTDFQoCiHiOgTlzdXPFdiBbyiCNL"
                }
            ],

            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            action: "",
            selectedItem: null,
            isModalOpen: false,
        }
    }
    add = () => {
        this.setState({
            isModalOpen: true
        })
    }
    handleClose = () =>{
        this.setState({
            isModalOpen: false
        })
    }
    edit = (item) =>{
        console.log('edit')
    }
    drop = (item) =>{
        console.log('drop')
    }
    render(){
        return(
            <div className="container">
                <h1 className="row">Gallery</h1>
                <button className="btn btn-success" onClick={() => this.add()}>
                    Tambah Buku
                </button>
                <div className="row">
                {this.state.buku.map((item, index) =>(
                    <Card cover={item.cover}
                    judul={item.judul}
                    penulis={item.penulis}
                    penerbit={item.penerbit}
                    harga={item.harga}
                    onEdit={() => this.edit(item)}
                    onDrop={() => this.drop(item)}
                    />
                ))}
                </div>
                    {/* Ini Modal */}
                    <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal Heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Wohooo, You're reading this text in a modal!!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

            </div>
        )
    }
}