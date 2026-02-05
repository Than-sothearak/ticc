"use client";

import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function UserForm() {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setUsers([...users, { email, id: Date.now() }]);
    setEmail("");
  };

  const handleDelete = () => {
    if (deleteUserId !== null) {
      setUsers(users.filter((user) => user.id !== deleteUserId));
      setDeleteUserId(null);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>Add Admin</CardTitle>
          <CardDescription>
            Only email is required. Add admin to the list.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2 items-end">
            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="outline">
              Add User
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Users Table */}
      {users.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Admin Lists</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      {/* AlertDialog */}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            onClick={() => setDeleteUserId(user.id)}
                          >
                            <Trash />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete User</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this user? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete}>
                              Yes, Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
