import React, { useEffect } from 'react'
import './Nav.css'


const Nav = () => {

    return(
   <div>
    <div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <div id="close-sidebar"><i class="fas fa-times"></i></div>
      </div>
      <div class="sidebar-header">
        
        <div class="user-info">
          <h6>SAURABH PATIL : DATA MINING DASHBOARD</h6>
        </div>
      </div>
    
      <div class="sidebar-menu">
        <ul>
          <li class="sidebar-dropdown">
            <a href="/file_upload"><i class="fa fa-tachometer-alt"></i><span>File Upload</span></a>
            <div class="sidebar-submenu">
            
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="/assignment_1"><i class="fa fa-shopping-cart"></i><span>Central Tendency</span></a>
            <div class="sidebar-submenu">

            
             
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/assignment_1_que2"><i class="fa fa-shopping-cart"></i><span>Task 1 : plots</span></a>
            <div class="sidebar-submenu">

            
             
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="/assignment_2"><i class="far fa-gem"></i><span>Dispersion Range Quartile</span></a>
            <div class="sidebar-submenu">
            
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="/assignment_3"><i class="fa fa-chart-line"></i><span>Normalisation</span></a>
            <div class="sidebar-submenu">
           
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="/assignment_4"><i class="fa fa-globe"></i><span>Decision tree</span></a>
            <div class="sidebar-submenu">
            
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/assignment_5"><i class="fa fa-globe"></i><span>Classifier : ANN & CNN & KNN</span></a>
            <div class="sidebar-submenu">

             
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/assignment_6"><i class="fa fa-globe"></i><span>Clustering graph</span></a>
            <div class="sidebar-submenu">
              
             
            </div>
          </li>


          <li class="sidebar-dropdown">
            <a href="/assignment_6_a"><i class="fa fa-globe"></i><span>ARI scores</span></a>
            <div class="sidebar-submenu">
              
             
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/assignment_7"><i class="fa fa-globe"></i><span>Association Rules</span></a>
            <div class="sidebar-submenu">
             
            </div>
          </li>

           
          <li class="sidebar-dropdown">
            <a href="/assignment_7_b"><i class="fa fa-globe"></i><span>Assc-Rule using support & confidence</span></a>
            <div class="sidebar-submenu">
             
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/assignment_8"><i class="fa fa-globe"></i><span>Web Crawler</span></a>
            <div class="sidebar-submenu">
             
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/assignment_8_a"><i class="fa fa-globe"></i><span>Page Rank</span></a>
            <div class="sidebar-submenu">
             
            </div>
          </li>
          
          
          <li class="sidebar-dropdown">
            <a href="/assignment_8_b"><i class="fa fa-globe"></i><span>Page Hits</span></a>
            <div class="sidebar-submenu">
             
            </div>
          </li>
          
          
          
        
        </ul>
      </div>
    </div>
    
  </nav>
    
  <main class="page-content">
    <div class="container-fluid">
      <hr/>
    </div>
  </main>
</div>
    
     </div>
  )
}

export default Nav


