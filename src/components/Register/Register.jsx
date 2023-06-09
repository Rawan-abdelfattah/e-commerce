import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>        <div class="container ">
    <div class="row ">
        <div class="col-6  m-auto mt-5 p-3 bg-white shadow">
            <div>
                <h1>Sign Up</h1>
                <h6 class="text-secondary">It's quick and easy.</h6>
                <hr />
            </div>
            <form action="createAccount.php" class="" method="post" autocomplete='off'>
                <div class="row">
                  
                    <div class="col col-md-6">
                        <input type="text" placeholder="First name" class="form-control m-2" id="fname" name="fname" required />
                    </div>
                    <div class="col col-md-6">
                        <input type="text" name="sname" placeholder="Surname" class="form-control m-2" id="sname" required />
                    </div>
                </div>
                <input type="email" placeholder="Email address" class="form-control m-2" id="email" name="email" required />
                <input type="text" placeholder="Mobile number" class="form-control m-2" id="mobile" name="mobile" required />
                <input type="password" placeholder="Password" class="form-control m-2 " id="password" name="password" minlength="10" required />
                <input type="password" placeholder="Confirm password" class="form-control m-2 " id="confirmpassword" name="confirmpassword" minlength="10" required />
                <div class="row m-1">
                    <label for="" class="text-secondary m-2">
                        Date of birth
                    </label>

                    <div class="col-4">
                        <select class="form-control " id="" name='day' required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                    </div>
                    <div class="col-4">
                        <select class="form-control" id="" name="month" required>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                    </div>
                    <div class="col-4 ">
                        <select class="form-control" id="" name="year" required>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                        </select>
                    </div>
                </div>

                <div class="row m-1">
                    <label for="" class="text-secondary m-2">
                        Gender
                    </label>
                    <div class="col-4">
                        <div>
                            <label class="form-check-label m-1  form-control" htmlFor="exampleRadios2">
                                female
                                <input class="form-check-input m-1" type="radio" id="exampleRadios2" defaultValue="f" defaultChecked value="f" name="gender" required />
                            </label>


                        </div>
                    </div>
                    <div class="col-4">
                        <div>
                            <label class="form-check-label m-1  form-control" htmlFor="exampleRadios1">
                                male
                                <input class="form-check-input m-1" type="radio" id="exampleRadios1" defaultValue="m" name="gender" value="m" required />
                            </label>

                        </div>
                    </div>
                    <div class="col-4">
                        <div>


                        </div>
                    </div>
                </div>

                <p class="text-secondary m-2 small ">
                    People who use our service may have uploaded your contact
                    information to FreshCard. Learn more. By clicking Sign Up, you
                    agree to our Terms, Privacy Policy and Cookies Policy. You may
                    receive SMS notifications from us and can opt out at any time.
                </p>
                <div class="text-center"> <label class="form-conrtrol m-2 fw-bold fs-4" for="">about</label>
                </div>

                <textarea placeholder="About" class="form-control m-2" id="about" name="about" minlength="10" required>
        </textarea>


                <a href="/regestration">
                    <button class="btn text-white bg-main mt-4  form-control fw-bold" type="submit" name="submit">
                        Sign Up
                    </button>
                </a>
            </form>

            <Link to="/login">
                <button class='btn login_btn text-white mt-3 fw-bold'>log In</button>
            </Link>


        </div>
    </div>
</div>
</div>
  )
}
