/*
    Copyright (C) 2010 - 2013 Glenn Jones. All Rights Reserved.
    MIT License: https://raw.github.com/glennjones/microformat-node/master/license.txt
    
  */

var hentry = {
	root: 'hentry',
	name: 'h-entry',
	properties: {
		'entry-title': {
			'map': 'p-name'
		},
		'entry-summary': {
			'map': 'p-summary'
		},
		'entry-content': {
			'map': 'e-content'
		},
		'published': {
			'map': 'dt-published'
		},
		'updated': {
			'map': 'dt-updated'
		},
		'author': { 
			'uf': ['h-card']
		},
		'category': {
			'map': 'p-category',
			'relAlt': ['tag']
		},
		'geo': {
			'map': 'p-geo', 
			'uf': ['h-geo']
		},
		'latitude': {},
		'longitude': {},
		'url': {
            'map': 'u-url',
            'relAlt': ['bookmark']
        }
	}
};
exports.hentry = hentry;