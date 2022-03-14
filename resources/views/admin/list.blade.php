@extends('layouts.admin')

@section('title', 'Winner List')

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Winner List</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Suburb</th>
                            <th>Number</th>
                            <th>Product</th>
                            <th>Receipt</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($winners as $winner)
                        <tr>
                            <td>{{$winner->firstname}}</td>
                            <td>{{$winner->lastname}}</td>
                            <td>{{$winner->suburb}}</td>
                            <td>{{$winner->number}}</td>
                            <td>{{$winner->product}}</td>
                            <td>{{$winner->receipt}}</td>
                            <td>{{$winner->email}}</td>
                            <td><a href="{{ route('delete',['id'=>$winner->id]) }}" class="btn btn-danger">Delete</a></td>
                        </tr>
                        @endforeach
                        </tbody>

                    </table>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
        <!-- /.col -->
    </div>
@endsection
