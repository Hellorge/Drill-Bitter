var meta = {
    'TEST': {
        'name': 'TEST',
        'parameters': ['DC','APMX','CHW','KCH','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[3,4,5,6,8,10,12,14,16,20],
            'APMX':[8,10,13,15,20,25,30,35,40,50],
            'CHW': [0.10,0.15,0.20,0.30,0.50],
            'KCH': ['45°'],
            'ZEFP': [4],
            'DCONMS': [3,4,5,6,8,10,12,14,16,20],
            'LF': [50,57,63,72,80,86,92,104]
        },
        'DC':{
            '3':{
                'APMX':[8],
                'CHW':[0.10],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF': [50],
                'MODEL':'tiny'
            },
            '4':{
                'APMX':[10],
                'CHW':[0.15],
                'KCH':["45°"],
                'ZEFP':[4],
                'DCONMS':[4],
                'LF': [50],
                'MODEL':'tiny'
            },
            '5':{
                'APMX':[13],
                'CHW':[0.15],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[5],
                'LF': [50],
                'MODEL':'short'
            },
            '6':{
                'APMX':[15],
                'CHW':[0.20],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[6],
                'LF':[57],
                'MODEL':'short'
            },
            '8':{
                'APMX':[20],
                'CHW':[0.30],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[8],
                'LF':[63],
                'MODEL':'short'
            },
            '10':{
                'APMX':[25],
                'CHW':[0.30],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[10],
                'LF':[72],
                'MODEL':'mid'
            },
            '12':{
                'APMX':[30],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[12],
                'LF':[80],
                'MODEL':'mid'
            },
            '14':{
                'APMX':[35],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[14],
                'LF':[86],
                'MODEL':'longer'
            },
            '16':{
                'APMX':[40],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[16],
                'LF':[92],
                'MODEL':'longer'
            },
            '20':{
                'APMX':[50],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[20],
                'LF':[104],
                'MODEL':'longer'
            }
        }
    },
    'END MILLS WITH CHAMFER': {
        'name': 'END MILLS WITH CHAMFER',
        'parameters': ['DC','APMX','CHW','KCH','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[3,4,5,6,8,10,12,14,16,20],
            'APMX':[8,10,13,15,20,25,30,35,40,50],
            'CHW': [0.10,0.15,0.20,0.30,0.50],
            'KCH': ['45°'],
            'ZEFP': [4],
            'DCONMS': [3,4,5,6,8,10,12,14,16,20],
            'LF': [50,57,63,72,80,86,92,104]
        },
        'DC':{
            '3':{
                'APMX':[8],
                'CHW':[0.10],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF': [50]
            },
            '4':{
                'APMX':[10],
                'CHW':[0.15],
                'KCH':["45°"],
                'ZEFP':[4],
                'DCONMS':[4],
                'LF': [50]
            },
            '5':{
                'APMX':[13],
                'CHW':[0.15],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[5],
                'LF': [50]
            },
            '6':{
                'APMX':[15],
                'CHW':[0.20],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[6],
                'LF':[57]
            },
            '8':{
                'APMX':[20],
                'CHW':[0.30],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[8],
                'LF':[63]
            },
            '10':{
                'APMX':[25],
                'CHW':[0.30],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[10],
                'LF':[72]
            },
            '12':{
                'APMX':[30],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[12],
                'LF':[80]
            },
            '14':{
                'APMX':[35],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[14],
                'LF':[86]
            },
            '16':{
                'APMX':[40],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[16],
                'LF':[92]
            },
            '20':{
                'APMX':[50],
                'CHW':[0.50],
                'KCH':['45°'],
                'ZEFP':[4],
                'DCONMS':[20],
                'LF':[104]
            }
        }
    },
    'FINISH END MILLS': {
        'name': 'FINISH END MILLS',
        'parameters': ['DC','APMX','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[2,3,4,5,6,8,10,12,14,16,20],
            'APMX':[5,8,10,13,15,20,25,30,35,40,50],
            'ZEFP': [4],
            'DCONMS': [2,3,4,5,6,8,10,12,14,16,20],
            'LF': [50,57,63,72,80,86,92,104]
        },
        'DC':{
            '2':{
                'APMX':[5],
                'ZEFP':[4],
                'DCONMS':[2],
                'LF':[50]
            },
            '3':{
                'APMX':[8],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF':[50]
            },
            '4':{
                'APMX':[10],
                'ZEFP':[4],
                'DCONMS':[4],
                'LF':[50]
            },
            '5':{
                'APMX':[13],
                'ZEFP':[4],
                'DCONMS':[5],
                'LF':[50]
            },
            '6':{
                'APMX':[15],
                'ZEFP':[4],
                'DCONMS':[6],
                'LF':[57]
            },
            '8':{
                'APMX':[20],
                'ZEFP':[4],
                'DCONMS':[8],
                'LF':[63]
            },
            '10':{
                'APMX':[25],
                'ZEFP':[4],
                'DCONMS':[10],
                'LF':[72]
            },
            '12':{
                'APMX':[30],
                'ZEFP':[4],
                'DCONMS':[12],
                'LF':[80]
            },
            '14':{
                'APMX':[35],
                'ZEFP':[4],
                'DCONMS':[14],
                'LF':[86]
            },
            '16':{
                'APMX':[40],
                'ZEFP':[4],
                'DCONMS':[16],
                'LF':[92]
            },
            '20':{
                'APMX':[50],
                'ZEFP':[4],
                'DCONMS':[20],
                'LF':[104]
            }
        }
    },
    'SLOT MILLING END MILLS': {
        'name': 'SLOT MILLING END MILLS',
        'parameters': ['DC','APMX','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[2,3,4,5,6,8,10,12,14,16,20],
            'APMX':[8,10,13,15,20,25,30,35,40,50],
            'ZEFP': [4],
            'DCONMS': [2,3,4,5,6,8,10,12,14,16,20],
            'LF': [50,57,63,72,80,86,92,104]
        },
        'DC':{
            '2':{
                'APMX':[5],
                'ZEFP':[4],
                'DCONMS':[2],
                'LF':[50]
            },
            '3':{
                'APMX':[8],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF':[50]
            },
            '4':{
                'APMX':[10],
                'ZEFP':[4],
                'DCONMS':[4],
                'LF':[50]
            },
            '5':{
                'APMX':[13],
                'ZEFP':[4],
                'DCONMS':[5],
                'LF':[50]
            },
            '6':{
                'APMX':[15],
                'ZEFP':[4],
                'DCONMS':[6],
                'LF':[57]
            },
            '8':{
                'APMX':[20],
                'ZEFP':[4],
                'DCONMS':[8],
                'LF':[63]
            },
            '10':{
                'APMX':[25],
                'ZEFP':[4],
                'DCONMS':[10],
                'LF':[72]
            },
            '12':{
                'APMX':[30],
                'ZEFP':[4],
                'DCONMS':[12],
                'LF':[80]
            },
            '14':{
                'APMX':[35],
                'ZEFP':[4],
                'DCONMS':[14],
                'LF':[86]
            },
            '16':{
                'APMX':[40],
                'ZEFP':[4],
                'DCONMS':[16],
                'LF':[92]
            },
            '20':{
                'APMX':[50],
                'ZEFP':[4],
                'DCONMS':[20],
                'LF':[104]
            }
        }
    },
    'LONG END MILLS': {
        'name': 'LONG END MILLS',
        'parameters': ['DC','APMX','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[3,4,5,6,8,10,12,16,20],
            'APMX':[20,25,30,35,50,60],
            'ZEFP': [4],
            'DCONMS': [3,4,5,6,8,10,12,16,20],
            'LF': [65,75,80,110,125]
        },
        'DC':{
            '3':{
                'APMX':[20],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF':[65]
            },
            '4':{
                'APMX':[25],
                'ZEFP':[4],
                'DCONMS':[4],
                'LF':[65]
            },
            '5':{
                'APMX':[30],
                'ZEFP':[4],
                'DCONMS':[5],
                'LF':[75]
            },
            '6':{
                'APMX':[30],
                'ZEFP':[4],
                'DCONMS':[6],
                'LF':[80]
            },
            '8':{
                'APMX':[35],
                'ZEFP':[4],
                'DCONMS':[8],
                'LF':[80]
            },
            '10':{
                'APMX':[50],
                'ZEFP':[4],
                'DCONMS':[10],
                'LF':[110]
            },
            '12':{
                'APMX':[50],
                'ZEFP':[4],
                'DCONMS':[12],
                'LF':[110]
            },
            '16':{
                'APMX':[60],
                'ZEFP':[4],
                'DCONMS':[16],
                'LF':[125]
            },
            '20':{
                'APMX':[60],
                'ZEFP':[4],
                'DCONMS':[20],
                'LF':[125]
            }
        }
    },
    '2 FLUTE END MILLS': {
        'name': '2 FLUTE END MILLS',
        'parameters': ['DC','APMX','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[2,3,4,5,6,8,10,12,16,20],
            'APMX':[6,9,10,12,15,20,25,30,40,50],
            'ZEFP': [2],
            'DCONMS': [2,3,4,5,6,8,10,12,16,20],
            'LF': [50,57,63,72,80,86,92,104]
        },
        'DC':{
            '2':{
                'APMX':[6],
                'ZEFP':[2],
                'DCONMS':[2],
                'LF':[50]
            },
            '3':{
                'APMX':[9],
                'ZEFP':[2],
                'DCONMS':[3],
                'LF':[50]
            },
            '4':{
                'APMX':[10],
                'ZEFP':[2],
                'DCONMS':[4],
                'LF':[50]
            },
            '5':{
                'APMX':[12],
                'ZEFP':[2],
                'DCONMS':[5],
                'LF':[50]
            },
            '6':{
                'APMX':[15],
                'ZEFP':[2],
                'DCONMS':[6],
                'LF':[57]
            },
            '8':{
                'APMX':[20],
                'ZEFP':[2],
                'DCONMS':[8],
                'LF':[63]
            },
            '10':{
                'APMX':[25],
                'ZEFP':[2],
                'DCONMS':[10],
                'LF':[72]
            },
            '12':{
                'APMX':[30],
                'ZEFP':[2],
                'DCONMS':[12],
                'LF':[80]
            },
            '16':{
                'APMX':[40],
                'ZEFP':[2],
                'DCONMS':[16],
                'LF':[92]
            },
            '20':{
                'APMX':[50],
                'ZEFP':[2],
                'DCONMS':[20],
                'LF':[104]
            }
        }
    },    
    '3 FLUTE END MILLS': {
        'name': '3 FLUTE END MILLS',
        'parameters': ['DC','APMX','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[2,3,4,5,6,8,10,12,16,20],
            'APMX':[6,9,10,12,15,20,25,30,40,50],
            'ZEFP': [3],
            'DCONMS': [2,3,4,5,6,8,10,12,16,20],
            'LF': [50,57,63,72,80,92,104]
        },
        'DC':{
            '2':{
                'APMX':[6],
                'ZEFP':[3],
                'DCONMS':[2],
                'LF':[50]
            },
            '3':{
                'APMX':[9],
                'ZEFP':[3],
                'DCONMS':[3],
                'LF':[50]
            },
            '4':{
                'APMX':[10],
                'ZEFP':[3],
                'DCONMS':[4],
                'LF':[50]
            },
            '5':{
                'APMX':[12],
                'ZEFP':[3],
                'DCONMS':[5],
                'LF':[50]
            },
            '6':{
                'APMX':[15],
                'ZEFP':[3],
                'DCONMS':[6],
                'LF':[57]
            },
            '8':{
                'APMX':[20],
                'ZEFP':[3],
                'DCONMS':[8],
                'LF':[63]
            },
            '10':{
                'APMX':[25],
                'ZEFP':[3],
                'DCONMS':[10],
                'LF':[72]
            },
            '12':{
                'APMX':[30],
                'ZEFP':[3],
                'DCONMS':[12],
                'LF':[80]
            },
            '16':{
                'APMX':[40],
                'ZEFP':[3],
                'DCONMS':[16],
                'LF':[92]
            },
            '20':{
                'APMX':[50],
                'ZEFP':[3],
                'DCONMS':[20],
                'LF':[104]
            }
        }
    },    
    'CORNER RADIUS END MILLS': {
        'name': 'CORNER RADIUS END MILLS',
        'parameters': ['DC','APMX','CR','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[3,4,5,6,8,10,12,16,20],
            'APMX':[8,10,13,15,20,25,30,40,50],
            'CR': [0.3,0.5,1],
            'ZEFP': [4],
            'DCONMS': [3,4,5,6,8,10,12,16,20],
            'LF': [50,57,63,72,80,86,92,104]
        },
        'DC':{
            '3':{
                'APMX':[8],
                'CR':[0.3,0.5],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF':[50]
            },
            '4':{
                'APMX':[10],
                'CR':[0.3,0.5],
                'ZEFP':[4],
                'DCONMS':[4],
                'LF':[50]
            },
            '5':{
                'APMX':[13],
                'CR':[0.3,0.5],
                'ZEFP':[4],
                'DCONMS':[5],
                'LF':[50]
            },
            '6':{
                'APMX':[15],
                'CR':[0.3,0.5],
                'ZEFP':[4],
                'DCONMS':[6],
                'LF':[57]
            },
            '8':{
                'APMX':[20],
                'CR':[0.3,0.5,1],
                'ZEFP':[4],
                'DCONMS':[8],
                'LF':[63]
            },
            '10':{
                'APMX':[25],
                'CR':[0.5,1],
                'ZEFP':[4],
                'DCONMS':[10],
                'LF':[72]
            },
            '12':{
                'APMX':[30],
                'CR':[0.5,1],
                'ZEFP':[4],
                'DCONMS':[12],
                'LF':[80]
            },
            '16':{
                'APMX':[40],
                'CR':[0.5,1],
                'ZEFP':[4],
                'DCONMS':[16],
                'LF':[92]
            },
            '20':{
                'APMX':[50],
                'CR':[1],
                'ZEFP':[4],
                'DCONMS':[20],
                'LF':[104]
            }
        }
    },    
    'BALL NOSE END MILLS': {
        'name': 'BALL NOSE END MILLS',
        'parameters': ['DC','APMX','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[2,3,4,5,6,8,10,12,16,20],
            'APMX':[6,9,10,12,15,20,25,30,40,50],
            'ZEFP': [2,4],
            'DCONMS': [3,4,5,6,8,10,12,16,20],
            'LF': [50,57,63,72,80,92,104]
        },
        'DC':{
            '2':{
                'APMX':[6],
                'ZEFP':[2],
                'DCONMS':[4],
                'LF':[50]
            },
            '3':{
                'APMX':[9],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF':[50]
            },
            '4':{
                'APMX':[10],
                'ZEFP':[4],
                'DCONMS':[4],
                'LF':[50]
            },
            '5':{
                'APMX':[12],
                'ZEFP':[4],
                'DCONMS':[5],
                'LF':[50]
            },
            '6':{
                'APMX':[15],
                'ZEFP':[4],
                'DCONMS':[6],
                'LF':[57]
            },
            '8':{
                'APMX':[20],
                'ZEFP':[4],
                'DCONMS':[8],
                'LF':[63]
            },
            '10':{
                'APMX':[25],
                'ZEFP':[4],
                'DCONMS':[10],
                'LF':[72]
            },
            '12':{
                'APMX':[30],
                'ZEFP':[4],
                'DCONMS':[12],
                'LF':[80]
            },
            '16':{
                'APMX':[40],
                'ZEFP':[4],
                'DCONMS':[16],
                'LF':[92]
            },
            '20':{
                'APMX':[50],
                'ZEFP':[4],
                'DCONMS':[20],
                'LF':[104]
            }
        }
    },    
    'STUB BALL NOSE': {
        'name': 'STUB BALL NOSE',
        'parameters': ['DC','APMX','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[3,4,5,6,8,10,12,16,20],
            'APMX':[3,4,5,6,8,10,12,16,20],
            'ZEFP': [2],
            'DCONMS': [3,4,5,6,8,10,12,16,20],
            'LF': [57,75,100,110,125]
        },
        'DC':{
            '3':{
                'APMX':[3],
                'ZEFP':[2],
                'DCONMS':[3],
                'LF':[50]
            },
            '4':{
                'APMX':[4],
                'ZEFP':[2],
                'DCONMS':[4],
                'LF':[75]
            },
            '5':{
                'APMX':[5],
                'ZEFP':[2],
                'DCONMS':[5],
                'LF':[75]
            },
            '6':{
                'APMX':[6],
                'ZEFP':[2],
                'DCONMS':[6],
                'LF':[100]
            },
            '8':{
                'APMX':[8],
                'ZEFP':[2],
                'DCONMS':[8],
                'LF':[100]
            },
            '10':{
                'APMX':[10],
                'ZEFP':[2],
                'DCONMS':[10],
                'LF':[100]
            },
            '12':{
                'APMX':[12],
                'ZEFP':[2],
                'DCONMS':[12],
                'LF':[110]
            },
            '16':{
                'APMX':[16],
                'ZEFP':[2],
                'DCONMS':[16],
                'LF':[125]
            },
            '20':{
                'APMX':[20],
                'ZEFP':[2],
                'DCONMS':[20],
                'LF':[125]
            }
        }
    },    
    'STANDARD DRILL': {
        'name': 'STANDARD DRILL',
        'parameters': ['DC','APMX','LF'],
        'options':{
            'DC':['2.0-2.3','2.4-2.6','2.7-2.9','3.0-3.3','3.4-3.8','3.9-4.2','4.3-4.7','4.8-5.3','5.4-6.0','6.1-6.7','6.8-7.5','7.6-8.5','8.6-9.5','9.6-10.5','11.0-11.9','12.0-13.0','13.0-14.9','15.0-15.5','15.6-16.0'],
            'APMX':[12,14,16,18,20,22,24,26,28,31,34,37,40,43,47,51,54,56,58],
            'LF': [40,43,46,52,55,58,62,66,70,74,79,84,89,95,102,107,111,115]
        },
        'DC':{
            '2.0-2.3':{
                'APMX':[12],
                'LF':[40]
            },
            '2.4-2.6':{
                'APMX':[14],
                'LF':[43]
            },
            '2.7-2.9':{
                'APMX':[16],
                'LF':[46]
            },
            '3.0-3.3':{
                'APMX':[18],
                'LF':[46]
            },
            '3.4-3.8':{
                'APMX':[20],
                'LF':[52]
            },
            '3.9-4.2':{
                'APMX':[22],
                'LF':[55]
            },
            '4.3-4.7':{
                'APMX':[24],
                'LF':[58]
            },
            '4.8-5.3':{
                'APMX':[26],
                'LF':[62]
            },
            '5.4-6.0':{
                'APMX':[28],
                'LF':[66]
            },
            '6.1-6.7':{
                'APMX':[31],
                'LF':[70]
            },
            '6.8-7.5':{
                'APMX':[34],
                'LF':[74]
            },
            '7.6-8.5':{
                'APMX':[37],
                'LF':[79]
            },
            '8.6-9.5':{
                'APMX':[40],
                'LF':[84]
            },
            '9.6-10.5':{
                'APMX':[43],
                'LF':[89]
            },
            '11.0-11.9':{
                'APMX':[47],
                'LF':[95]
            },
            '12.0-13.0':{
                'APMX':[51],
                'LF':[102]
            },
            '13.0-14.9':{
                'APMX':[54],
                'LF':[107]
            },
            '15.0-15.5':{
                'APMX':[56],
                'LF':[111]
            },
            '15.6-16.0':{
                'APMX':[58],
                'LF':[115]
            },
        }
    },    
    'LONG DRILLS': {
        'name': 'LONG DRILLS',
        'parameters': ['DC','APMX','LF'],
        'options':{
            'DC':['3.0-3.7','3.8-4.7','4.8-6.0','6.1-8.0','8.1-10.0','10.1-12.0','12.5-14.0','14.5-18.0','18.1-20.0'],
            'APMX':[28,36,44,53,61,71,77,83,101],
            'LF': [66,74,82,91,103,118,124,133,153]
        },
        'DC':{
            '3.0-3.7':{
                'APMX':[28],
                'LF':[66]
            },
            '3.8-4.7':{
                'APMX':[36],
                'LF':[74]
            },
            '4.8-6.0':{
                'APMX':[44],
                'LF':[82]
            },
            '6.1-8.0':{
                'APMX':[53],
                'LF':[91]
            },
            '8.1-10.0':{
                'APMX':[61],
                'LF':[103]
            },
            '10.1-12.0':{
                'APMX':[71],
                'LF':[118]
            },
            '12.5-14.0':{
                'APMX':[77],
                'LF':[124]
            },
            '14.5-18.0':{
                'APMX':[83],
                'LF':[133]
            },
            '18.1-20.0':{
                'APMX':[101],
                'LF':[153]
            }
        }
    },    
    'REAMER': {
        'name': 'REAMER',
        'parameters': ['DC','APMX','DCONMR','ZEFP','DCONMS','LF'],
        'options':{
            'DC':[3,4,5,6,8,10,12,14,16,20],
            'APMX':[15,19,23,26,33,38,44,47,52,55],
            'DCONMR':[2.8,3.8,4.8,5.8,7.8,9.8,11.8,13.8,15.8,19.8],
            'ZEFP': [4,6],
            'DCONMS': [3,4,5,6,8,10,12,14,16,20],
            'LF': [57,75,100,110,160,170]
        },
        'DC':{
            '3':{
                'APMX':[15],
                'DCONMR':[2.8],
                'ZEFP':[4],
                'DCONMS':[3],
                'LF':[57]
            },
            '4':{
                'APMX':[19],
                'DCONMR':[3.8],
                'ZEFP':[6],
                'DCONMS':[4],
                'LF':[75]
            },
            '5':{
                'APMX':[23],
                'DCONMR':[4.8],
                'ZEFP':[6],
                'DCONMS':[5],
                'LF':[75]
            },
            '6':{
                'APMX':[26],
                'DCONMR':[5.8],
                'ZEFP':[6],
                'DCONMS':[6],
                'LF':[100]
            },
            '8':{
                'APMX':[33],
                'DCONMR':[7.8],
                'ZEFP':[6],
                'DCONMS':[8],
                'LF':[100]
            },
            '10':{
                'APMX':[38],
                'DCONMR':[9.8],
                'ZEFP':[6],
                'DCONMS':[10],
                'LF':[100]
            },
            '12':{
                'APMX':[44],
                'DCONMR':[11.8],
                'ZEFP':[6],
                'DCONMS':[12],
                'LF':[110]
            },
            '14':{
                'APMX':[47],
                'DCONMR':[13.8],
                'ZEFP':[6],
                'DCONMS':[14],
                'LF':[160]
            },
            '16':{
                'APMX':[52],
                'DCONMR':[15.8],
                'ZEFP':[6],
                'DCONMS':[16],
                'LF':[170]
            },
            '20':{
                'APMX':[55],
                'DCONMR':[19.8],
                'ZEFP':[6],
                'DCONMS':[20],
                'LF':[170]
            }
        }
    },
}