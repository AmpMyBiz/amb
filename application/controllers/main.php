<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {

	function index() {

		$this->output->set_output('Let us begin...');

	}

	function heck() {

		$this->output->set_output('booya');
		
	}

}