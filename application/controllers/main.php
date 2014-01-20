<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {

	function index() {

		$data['view'] = 'home-view';

		$this->load->view('includes/main-template', $data);

	}

	function heck() {

		$this->output->set_output('booya');
		
	}

}